Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create, :index, :update] do
      get ':id/friends', :to => 'api/users#friends'
      get ':id/other_users', :to => 'api/users#other_users'
    end
    resources :completions, only: [:create, :show, :update, :index]
    resources :comments, only: [:index,:show,:create]
    resource :session, only:[:create,:destroy,:show]
    resources :routes, only:[:create,:destroy,:show, :index,:update]
    resources :follows, only:[:create, :destroy, :index,:show]
  end



  root "static_pages#root"
end
