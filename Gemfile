source "https://rubygems.org"

# Core gems
gem "jekyll"
gem "github-pages"
gem "webrick", "~> 1.8"
gem "jekyll-paginate"

# Jekyll plugins
group :jekyll_plugins do
  gem "faraday-retry"
end

# Platform specific
platforms :mingw, :mswin do
  gem "wdm", ">= 0.1.0"
end

# Compatibility
gem "public_suffix", "~> 5.1"