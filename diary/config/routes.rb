Rails.application.routes.draw do
  root "root#index"
  resources :posts, defaults: {format: 'json'}
end
