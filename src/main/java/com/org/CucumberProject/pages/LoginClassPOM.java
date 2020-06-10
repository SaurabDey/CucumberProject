package com.org.CucumberProject.pages;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.org.CucumberProject.common.CommonUtill;

public class LoginClassPOM {
	static Logger log= Logger.getLogger(LoginClassPOM.class);
	
	@FindBy(id= "txtUsername")
	WebElement locatorusername;
	
	@FindBy(name= "txtPassword")
	WebElement locatorpass;
	
	@FindBy(id= "btnLogin")
	WebElement locatorLoginbutn;
	
	WebDriver driver ;
	public LoginClassPOM(WebDriver driver) 
	{
		this.driver= driver;
		PageFactory.initElements(driver, this);
	}
	public void log()
	{
		
		Map<Integer, List<String>> getExcelData=CommonUtill.excelRead();
		
		locatorusername.sendKeys(getExcelData.get(1).get(0));//first Admin

		locatorpass.sendKeys(getExcelData.get(1).get(1));//first admin123
		
		locatorLoginbutn.click();
		
		log.info("Logged in with >>>> :"+getExcelData.get(1).get(0));
		
	}
	
	public void logWithParameter(String user, String pass)
	{

		
		locatorusername.sendKeys(user);//first Admin

		locatorpass.sendKeys(pass);//first admin123
		
		locatorLoginbutn.click();
		
	}

}
