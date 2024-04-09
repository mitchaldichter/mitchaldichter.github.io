function set_common_html(header_text) {
  document.getElementById("left_header").style.backgroundColor = background_color_array[header_text];
  document.getElementById("right_header").style.backgroundColor = background_color_array[header_text];
  document.getElementById("left_content").innerHTML = table_of_contents_array[header_text];
  document.getElementById("right_header").innerHTML = header_text;
}

const background_color_array = [];
background_color_array["Maths Survival Guide"] = "Violet";
background_color_array["Single Variable Calculus: Integration"] = "MediumSeaGreen";
background_color_array["Differential Equations"] = "LightBlue";
background_color_array["Additional Resources"] = "Tomato";

const table_of_contents_courses_section = `
  <h3>Courses</h3>
  <ul>
  <!--<li>Single Variable Calculus</li>
  <ul>
  <ul>
  </ul>
  <li><a href="limits_and_derivatives_overview.html">Limits and Derivatives</a></li>
  <li><a href="integration_overview.html">Integration</a></li>
  <li>Sequences and Series</li>
  </ul>
  <li>Multivariable Calculus</li>
  <li>Linear Algebra</li>-->
  <li><a href="differential_equations_overview.html">Differential Equations</a></li>
  </ul>
  
  <h3>Additional Resources</h3>
  <ul>
  <li><a href="how_to_use_wolfram_alpha.html">WolframAlpha</a></li>
  </ul>
`;
const table_of_contents_array = [];
table_of_contents_array["Maths Survival Guide"] = table_of_contents_courses_section;
table_of_contents_array["Single Variable Calculus: Integration"] = table_of_contents_courses_section + `
  <h3>Single Variable Calculus: Integration</h3>
  <ul>
  <li><a href="integration_by_parts.html">Integration by Parts</a></li>
  </ul>
`;
table_of_contents_array["Differential Equations"] = table_of_contents_courses_section + `
  <h3>Differential Equations</h3>
  <ul>
  <li>Introduction</li>
  <ul>
  <li><a href="ordinary_vs_partial.html">Ordinary vs. Partial</li>
  <li><a href="differential_equations_notation.html">Notation</a></li>
  <li><a href="differential_equations_verifying_solutions.html">Verifying Solutions</a></li>
  <li><a href="initial_value_problems.html">Initial Values Problems</a></li>
  </ul>
  <li>First Order Differential Equations</li>
  <ul>
  <li><a href="separable_equations.html">Separable Equations</a></li>
  <li><a href="integrating_factor.html">Integrating Factor</a></li>
  <li><a href="exact_equations.html">Exact Equations</a></li>
  </ul>
  <li>Second Order Differential Equations</li>
  <ul>
  <li><a href="method_of_undetermined_coefficients_second_order.html">Method of Undetermined Coefficients</a></li>
  <li><a href="reduction_of_order_second_order.html">Reduction of Order</a></li>
  <li><a href="variation_of_parameters_second_order.html">Variation of Parameters</a></li>
  </ul>
  </ul>
`;
table_of_contents_array["Additional Resources"] = table_of_contents_courses_section;