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
background_color_array["WolframAlpha"] = "Tomato";

const table_of_contents_courses_section = `
  <h3>Courses</h3>
  <ul>
  <li>Single Variable Calculus</li>
  <ul>
  <ul>
  </ul>
  <li>Limits and Derivatives</li>
  <li>Integration</li>
  <li>Sequences and Series</li>
  </ul>
  <li>Multivariable Calculus</li>
  <li>Linear Algebra</li>
  <li>Differential Equations</li>
  </ul>
`;
const table_of_contents_array = [];
table_of_contents_array["Maths Survival Guide"] = table_of_contents_courses_section;
table_of_contents_array["Single Variable Calculus: Integration"] = table_of_contents_courses_section + `
  <h3>Single Variable Calculus: Integration</h3>
  <ul>
  <li>Integration by Parts</li>
  </ul>
`;
table_of_contents_array["Differential Equations"] = table_of_contents_courses_section + `
  <h3>Differential Equations</h3>
  <ul>
  <li>Introduction</li>
  <ul>
  <li>Ordinary vs. Partial</li>
  <li>Notation</li>
  <li>Verifying Solutions</li>
  <li>Initial Values Problems</li>
  </ul>
  <li>First Order Differential Equations</li>
  <ul>
  <li>Separable Equations</li>
  <li>Integrating Factor</li>
  <li>Exact Equations</li>
  </ul>
  <li>Second Order Differential Equations</li>
  <ul>
  <li>Method of Undetermined Coefficients</li>
  <li>Reduction of Order</li>
  <li>Variation of Parameters</li>
  </ul>
  </ul>
`;
table_of_contents_array["WolframAlpha"] = table_of_contents_courses_section;