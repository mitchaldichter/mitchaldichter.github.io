import os

exclude_HTMLs = [
"index.html",
"Strogatz_errata.html",
"combining.html",]

table_of_contents_courses_section = """
  <h3 class="table_of_contents_h3">Courses</h3>
  <ol>
    <!--<li>Single Variable Calculus
      <ol>
        <li><a href="limits_and_derivatives_overview.html">Limits and Derivatives</a></li>
        <li><a href="integration_overview.html">Integration</a></li>
        <li><a href="sequences_and_series_overview.html">Sequences and Series</a></li>
      </ol>
    </li>
    <li><a href="multivariable_calculus_overview.html">Multivariable Calculus</a></li>
    <li><a href="linear_algebra_overview.html">Linear Algebra</a></li>-->
    <li><a href="differential_equations_overview.html">Differential Equations</a></li>
  </ol>
  <br>
  <h3 class="table_of_contents_h3">Additional Resources</h3>
  <ol>
    <li><a href="how_to_use_wolfram_alpha.html">WolframAlpha</a></li>
    <li><a href="https://aeb019.hosted.uark.edu/dfield.html" target="_blank">Direction Field Plotter by Ariel Barton</a></li>
    <li><a href="https://aeb019.hosted.uark.edu/pplane.html" target="_blank">Phase Plane Plotter by Ariel Barton</a></li>
  </ol>
  <br>
"""

table_of_contents_array = {}
table_of_contents_array["Maths Survival Guide"] = table_of_contents_courses_section
table_of_contents_array["Single Variable Calculus: Limits and Derivatives"] = table_of_contents_courses_section + """
  <h3 class="table_of_contents_h3">Single Variable Calculus: Limits and Derivatives</h3>
  <ol>
    <li><a href=".html">stuff</a></li>
  </ol>
"""
table_of_contents_array["Single Variable Calculus: Integration"] = table_of_contents_courses_section + """
  <h3 class="table_of_contents_h3">Single Variable Calculus: Integration</h3>
  <ol>
    <li><a href="integration_by_parts.html">Integration by Parts</a></li>
    <li><a href="partial_fraction_decomposition.html">Partial Fraction Decomposition</a></li>
  </ol>
"""
table_of_contents_array["Differential Equations"] = table_of_contents_courses_section + """
  <h3 class="table_of_contents_h3">Differential Equations</h3>
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
        <!--<li><a href="equilibria_and_phase_lines.html">Equilibria and Phase Lines</a></li>-->
        <li><a href="separable_equations.html">Separable Equations</a></li>
        <li><a href="integrating_factor.html">Integrating Factor</a></li>
        <li><a href="differential_equations_substitution.html">Bernoulli Equations and Substitutions</a></li>
        <li><a href="exact_equations.html">Exact Equations</a></li>
        <li><a href="exact_equations_integrating_factor.html">Exact Equations with Integrating Factor</a></li>
        <li><a href="eulers_method.html">Euler's Method</a></li>
        <li><a href="existence_and_uniqueness.html">Existence and Uniqueness</a></li>
        <li><a href="interval_of_validity.html">Interval of Validity</a></li>
        <!--<li>Applications
          <ol>
            <li><a href=".html">Radioactive Decay and Population Growth</a></li>
            <li><a href=".html">Logistic Equation</a></li>
            <li><a href=".html">Mixing Tank Problem</a></li>
            <li><a href=".html">Newton's Law of Cooling</a></li>
            <li><a href=".html">Terminal Velocity</a></li>
            <li><a href=".html">Continuously Compounded Interest</a></li>
          </ol>
        </li>-->
      </ol>
    </li>
      <li>Second Order Differential Equations
        <ol>
          <li>$ay''+by'+cy = 0$
            <ol>
              <li><a href="second_order_distinct_real_roots.html">Distinct Real Roots</a></li>
              <li><a href="second_order_repeated_real_root.html">Repeated Real Root</a></li>
              <li><a href="second_order_imaginary_roots.html">Imaginary Roots</a></li>
            </ol>
          </li>
          <li><a href="method_of_undetermined_coefficients_second_order.html">Method of Undetermined Coefficients</a></li>
          <!--<li><a href="reduction_of_order_second_order.html">Reduction of Order</a></li>
          <li><a href="variation_of_parameters_second_order.html">Variation of Parameters</a></li>-->
        </ol>
    </li>
  </ol>
"""
table_of_contents_array["Additional Resources"] = table_of_contents_courses_section

begin_header_comment = "<!--Begin Header Text-->"
end_header_comment = "<!--End Header Text-->"
begin_toc_comment =  "<!--Begin Table of Contents-->"
end_toc_comment =  "<!--End Table of Contents-->"
for element in os.listdir():
  if ".html" in element and element not in exclude_HTMLs:
    HTML_file = open(element, "r")
    HTML_lines = HTML_file.read()
    HTML_file.close()
    
    begin_header_index = HTML_lines.find(begin_header_comment) + len(begin_header_comment)
    end_header_index = HTML_lines.find(end_header_comment)
    header_text = HTML_lines[begin_header_index:end_header_index]
    
    begin_toc_index = HTML_lines.find(begin_toc_comment) + len(begin_toc_comment)
    end_toc_index = HTML_lines.find(end_toc_comment)
    pre_toc_text = HTML_lines[:begin_toc_index]
    post_toc_text = HTML_lines[end_toc_index:]
    
    new_HTML_text = pre_toc_text + table_of_contents_array[header_text] + post_toc_text
    
    HTML_file = open(element, "w")
    HTML_lines = HTML_file.write(new_HTML_text)
    HTML_file.close()
    
