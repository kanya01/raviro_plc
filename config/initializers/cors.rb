Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "*"  # Configure this based on your needs
    resource "*",
             headers: :any,
             methods: [ :get, :post, :put, :patch, :delete, :options, :head ],
             credentials: false
  end
end
