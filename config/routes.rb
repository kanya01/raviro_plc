Rails.application.routes.draw do
  root 'pages#home'
  get '/about', to: 'pages#about'

  namespace :admin do
    root to: 'dashboard#index'
    resources :publications
    resources :job_listings
    resources :applications
  end

  resources :publications, only: [:index, :show]
  resources :job_listings, only: [:index, :show]
  resources :applications, only: [:new, :create]
end
