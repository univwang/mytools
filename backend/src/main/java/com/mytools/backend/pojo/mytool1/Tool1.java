package com.mytools.backend.pojo.mytool1;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.IdType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tool1 {

    @TableId(type = IdType.AUTO)
    private Integer id;


    private String indexes;
    private String content;
}
