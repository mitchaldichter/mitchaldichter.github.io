import os

exclude_HTMLs = [
"combining.html",
"index.html",
"partial_fraction_decomposition.html",
"integration_by_parts.html",
"integration_overview.html",
"limits_and_derivatives_overview.html",]

try:
  os.remove("sitemap.txt")
except OSError:
  pass
sitemap_file = open("sitemap.txt", "a")
sitemap_file.write("https://mitchaldichter.com/\n")
for element in os.listdir():
  if ".html" in element and element not in exclude_HTMLs:
    sitemap_file.write("https://mitchaldichter.com/" + element + "\n")
sitemap_file.close()