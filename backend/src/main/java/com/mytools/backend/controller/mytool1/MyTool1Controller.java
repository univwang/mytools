package com.mytools.backend.controller.mytool1;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.mytools.backend.mapper.Tool1Mapper;
import com.mytools.backend.pojo.mytool1.Tool1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
public class MyTool1Controller {

    @Autowired
    Tool1Mapper mapper;

    @GetMapping("/api/tool1/all/")
    public List<Tool1> getAll() {
        return mapper.selectList(null);
    }

    @PostMapping("/api/tool1/add/")
    public Map<String, String> add(@RequestParam Map<String, String> data) {

        Tool1 tool1 = new Tool1(null,data.get("index"), data.get("content"));
        mapper.insert(tool1);
        Map<String, String> map = new HashMap<>();
        map.put("message", "success");
        return map;
    }

    @GetMapping("/api/tool1/index/{index}/")
    public Map<String,String> get_from_index(@PathVariable String index) {
        QueryWrapper<Tool1> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("indexes", index);
        Map<String, String> res = new HashMap<>();
        Tool1 tool1 = mapper.selectOne((queryWrapper));
        if(tool1 == null) {
            res.put("message", "error");
            return res;
        }

        res.put("message", "success");
        res.put("content", tool1.getContent());
        return res;
    }
    @GetMapping("/api/tool1/delete/{index}/")
    public String delete(@PathVariable String index) {
        QueryWrapper<Tool1> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("indexes", index);
        mapper.delete(queryWrapper);
        return "delete succes";
    }
}
