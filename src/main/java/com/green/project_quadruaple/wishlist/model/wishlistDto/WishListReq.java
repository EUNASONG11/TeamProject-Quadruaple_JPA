package com.green.project_quadruaple.wishlist.model.wishlistDto;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WishListReq {

    private Long strfId;

    // Getter 및 Setter
    public Long getStrfId() {
        return strfId;
    }

    public void setStrfId(Long strfId) {
        this.strfId = strfId;
    }
}