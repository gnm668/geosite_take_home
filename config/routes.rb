Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'root/root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :requests, only: [:index, :show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: 'root#root'
end
