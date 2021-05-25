Rails.application.routes.draw do
  resources :quotes, only: [:index, :show]
  get '/random', to: 'quotes#random', as: 'random'
end
