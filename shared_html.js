function set_common_html(header_text) {
  document.getElementById("left_header").style.backgroundColor = background_color_array[header_text];
  document.getElementById("right_header").style.backgroundColor = background_color_array[header_text];
  document.getElementById("left_content").innerHTML = table_of_contents_array[header_text];
  document.getElementById("right_header").innerHTML = header_text;
}


const background_color_array = [];
background_color_array["Maths Survival Guide"] = "Violet";
background_color_array["Single Variable Calculus: Integration"] = "MediumSeaGreen";
background_color_array["Differential Equations"] = "#03a9f4";
background_color_array["Additional Resources"] = "Tomato";
background_color_array["temp1"] = "#4285f4";
background_color_array["temp2"] = "#ea4335";
background_color_array["temp3"] = "#fbbc05";
background_color_array["temp4"] = "#34a853";
background_color_array["temp5"] = "#673ab7";
background_color_array["temp7"] = "#3f51b5";
background_color_array["temp8"] = "#673ab7";
background_color_array["temp9"] = "#e91e63";
background_color_array["temp0"] = "#f44336";


const table_of_contents_courses_section = `
  <h3>Courses</h3>
  <ol>
    <li>Single Variable Calculus
      <ol>
        <li><a href="limits_and_derivatives_overview.html">Limits and Derivatives</a></li>
        <li><a href="integration_overview.html">Integration</a></li>
        <li>Sequences and Series</li>
      </ol>
    </li>
    <li>Multivariable Calculus</li>
    <li>Linear Algebra</li>
    <li><a href="differential_equations_overview.html">Differential Equations</a></li>
  </ol>
    
  <h3>Additional Resources</h3>
  <ol>
    <li><a href="how_to_use_wolfram_alpha.html">WolframAlpha</a></li>
  </ol>
`;
const table_of_contents_array = [];
table_of_contents_array["Maths Survival Guide"] = table_of_contents_courses_section;
table_of_contents_array["Single Variable Calculus: Integration"] = table_of_contents_courses_section + `
  <h3>Single Variable Calculus: Integration</h3>
  <ol>
    <li><a href="integration_by_parts.html">Integration by Parts</a></li>
  </ol>
`;
table_of_contents_array["Differential Equations"] = table_of_contents_courses_section + `
  <h3>Differential Equations</h3>
  <ol>
    <li>Introduction
      <ol>
        <li><a href="differential_equations_notation_and_definitions.html">Notation and Definitions</a></li>
        <li><a href="differential_equations_verifying_solutions.html">Verifying Solutions</a></li>
        <li><a href="initial_value_problems.html">Initial Values Problems</a></li>
      </ol>
    </li>
    <li>First Order Differential Equations
      <ol>
        <li><a href="direction_fields.html">Direction Fields</a></li>
        <li><a href="separable_equations.html">Separable Equations</a></li>
        <li><a href="integrating_factor.html">Integrating Factor</a></li>
        <li><a href="exact_equations.html">Exact Equations</a></li>
        <li><a href="exact_equations_integrating_factor.html">Exact Equations with Integrating Factor</a></li>
        <li><a href="eulers_method.html">Euler's Method</a></li>
        <li><a href="existence_and_uniqueness.html">Existence and Uniqueness</a></li>
        <li>Applications
          <ol>
            <li><a href=".html">Radioactive Decay and Population Growth</a></li>
            <li><a href=".html">Mixing Tank Problem</a></li>
            <li><a href=".html">Newton's Law of Cooling</a></li>
            <li><a href=".html">Terminal Velocity</a></li>
            <li><a href=".html">Continuously Compounded Interest</a></li>
          </ol>
        </li>
      </ol>
    </li>
      <li>Second Order Differential Equations
        <ol>
          <li>$ay''+by'+cy = 0$
            <ol>
              <li><a href=".html">Distinct Real Roots</a></li>
              <li><a href=".html">Repeated Real Root</a></li>
              <li><a href=".html">Imaginary Roots</a></li>
            </ol>
          </li>
          <li><a href="method_of_undetermined_coefficients_second_order.html">Method of Undetermined Coefficients</a></li>
          <li><a href="reduction_of_order_second_order.html">Reduction of Order</a></li>
          <li><a href="variation_of_parameters_second_order.html">Variation of Parameters</a></li>
        </ol>
    </li>
  </ol>
`;
table_of_contents_array["Additional Resources"] = table_of_contents_courses_section;