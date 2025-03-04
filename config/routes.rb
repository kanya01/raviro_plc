Rails.application.routes.draw do
  root "pages#home"
  get "/about", to: "pages#about"
  get "/contact", to: "pages#contact"

  resources :blog_posts, path: "blog", only: [ :index, :show ]

  namespace :api do
    resources :inquiries, only: [ :create ]
  end

  namespace :admin do
    root to: "dashboard#index"
    resources :publications
    resources :job_listings
    resources :applications
    resources :blog_posts
  end

  resources :publications, only: [ :index, :show ]
  resources :job_listings, only: [ :index, :show ]
  resources :applications, only: [ :new, :create ]
end
