# encoding: utf-8
#
# Title:
# ======
# Jekyll to JSON Generator
#
# Description:
# ============
# A plugin for generating JSON representations of your
# site content for easy use with JS MVC frameworks like Backbone.
#
# Author:
# ======
# Jezen Thomas
# jezenthomas@gmail.com
# http://jezenthomas.com

module Jekyll
  require 'json'

  class JSONGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Converter for .md > .html
      converter = site.getConverterImpl(Jekyll::Converters::Markdown)

      hash = {};

      # Iterate over all posts
      site.posts.each do |post|
        # Encode the HTML to JSON
        hash[post.url] = {
          'content' => converter.convert(post.content),
          'categories' => post.categories,
          'title' => post.title
        }
      end
      f = File.new('_site/posts.json', 'w+')
      f.puts JSON.generate(hash)

      hash = {};
      # Iterate over all posts
      site.pages.each do |page|
        # Encode the HTML to JSON
        hash[page.path] = {
          'content' => converter.convert(page.content),
          'name' => page.name
        }
      end
      f = File.new('_site/pages.json', 'w+')
      f.puts JSON.generate(hash)

    end

  end

end
