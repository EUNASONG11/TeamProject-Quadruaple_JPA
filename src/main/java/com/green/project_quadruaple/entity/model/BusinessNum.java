package com.green.project_quadruaple.entity.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.green.project_quadruaple.entity.base.CreatedAt;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@EqualsAndHashCode(callSuper = true)
public class BusinessNum extends CreatedAt {

    @Id
    @Column(name = "busi_num", length = 20)
    private String busiNum;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
