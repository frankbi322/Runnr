Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only:[:create]
    resources :comments, only: [:index,:show,:create]
    resource :session, only:[:create,:destroy,:show]
    resources :routes, only:[:create,:destroy,:show, :index,:update]
  end
  root "static_pages#root"
end
