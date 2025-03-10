package com.green.project_quadruaple.user;

import com.green.project_quadruaple.common.config.jwt.UserRole;
import com.green.project_quadruaple.user.Repository.UserRepository;
import com.green.project_quadruaple.user.mail.MailService;
import com.green.project_quadruaple.user.model.DuplicateEmailResult;
import com.green.project_quadruaple.user.model.UserSignUpReq;
import org.apache.catalina.User;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mock.web.MockMultipartFile;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.any;
import static org.mockito.BDDMockito.given;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = UserService.class)
class UserServiceTest extends UserServiceParentTest{

//    @Test
//    @DisplayName("회원가입 실패 - 이메일 중복")
//    void signUser_fail_duplicateEmail() throws Exception {
//        // given
//        UserSignUpReq req = new UserSignUpReq();
//        req.setEmail("test@gmail.com");
//        req.setPw("password!");
//        req.setName("test");
//
//        MockMultipartFile file = new MockMultipartFile("pic", "profile.jpg", "image/jpeg", new byte[]{1, 2, 3});
//
//        given(userRepository.existsByAuthenticationCode_Email(req.getEmail())).willReturn(true);
//
//        // when
//        int result = userService.signUp(file, req);
//
//        // then
//        assertEquals(0, result);
//        verify(userRepository, never()).save(any(User.class)); // 저장이 호출되지 않아야 함
//    }


    @Test
    @DisplayName("회원가입 성공 - 프로필 사진 있음")
    void signUser_withProfilePicture() throws Exception {
        //given
        UserSignUpReq req = new UserSignUpReq();
        req.setUserId(SIGNED_USER_ID);
        req.setEmail("test@gmail.com");
        req.setPw("password!");
        req.setName("test");
        List<UserRole> roles = new ArrayList<>();
        roles.add(UserRole.USER);
        req.setRole(roles);

        MockMultipartFile file = new MockMultipartFile("pic", "profile.jpg", "image/jpeg", new byte[]{1, 2, 3});

        MailService.mailChecked.put("test@gmail.com", true);

        duplicateEmailResult.setUserIdCount(0);
        duplicateEmailResult.setEmailCount(0);

        given(userMapper.getEmailDuplicateInfo(any()))
                .willAnswer(invocation -> {
                    DuplicateEmailResult result = new DuplicateEmailResult();
                    result.setUserIdCount(0);
                    result.setEmailCount(0);
                    return result;
                });
        given(passwordEncoder.encode(req.getPw())).willReturn("hashedPassword");
        given(myFileUtils.makeRandomFileName(file)).willReturn("randomFileName.jpg");
        given(userMapper.insUser(any())).willReturn(1);

        // when
        int result = 0;
        try {
            result = userService.signUp(file, req);
        } catch (Exception e) {
            e.printStackTrace(); // 예외 발생 시 로그 출력
        }

        // then
        assertEquals(1, result);
        assertNotNull(req.getProfilePic());
        assertEquals("hashedPassword", req.getPw());
    }

}