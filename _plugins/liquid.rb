#Liquid filters
#
module Jekyll
  module Slug
    def slug(input)
      "#{input.to_slug}"
    end
  end

  module Extract
    def extract(input)
      input[0,200] + "..."
    end
  end

end

Liquid::Template.register_filter(Jekyll::Slug)
Liquid::Template.register_filter(Jekyll::Extract)
