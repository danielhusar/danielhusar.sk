#Liquid filters
#
module Jekyll

  module Slug
    def slug(input)
      input.to_slug
    end
  end

  module Extract
    def extract(input)
      input[0,200] + '...'
    end
  end

  module ReadTimeFilter
    def readtime(input)
      charcount = 4.5
      wpm = 180

      rt = (input.to_f/charcount/wpm).round
      rt = 1 if rt < 1

      if rt == 1
        rc = ' minúta'
      elsif rt < 5
        rc = ' minúty'
      else
        rc = ' minút'
      end

      rt.to_s + rc
    end
  end

end



Liquid::Template.register_filter(Jekyll::Slug)
Liquid::Template.register_filter(Jekyll::Extract)
Liquid::Template.register_filter(Jekyll::ReadTimeFilter)
