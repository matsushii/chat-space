require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    config.i18n.default_locale = :ja
  end
end

module PairsLike
  class Application < Rails::Application
    # ここから下を追加
    config.generators do |g|
      g.helper false
      g.test_framework false
    end
  end
end