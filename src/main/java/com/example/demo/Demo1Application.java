package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;


@SpringBootApplication
@Controller
public class Demo1Application {

	public static void main(String[] args) {
		SpringApplication.run(Demo1Application.class, args);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/")
	public ModelAndView getHomePage() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("index.html");
		return modelAndView;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/about")
	public ModelAndView getAboutPage() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("about.html");
		return modelAndView;
	}
}
