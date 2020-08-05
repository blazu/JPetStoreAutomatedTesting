package Group1.Assignment6;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/feature"},
		glue= {"steps"},
		plugin= {"html:target/cucumber-html-repo"}
)
public class TestRunner {}
