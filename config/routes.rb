Rails.application.routes.draw do
  get 'human_resources/index'
  get 'hr', to: 'human_resources#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'protocols#index'
end
