class QuotesController < ApplicationController

  def index
    @quotes = Quote.all
    render json: @quotes
  end 

  def show
    @quote = Quote.find(params[:id])
    render json: @quote
  end

  def random
    @rando = Quote.singleQuote
    render json: @rando
  end 
end
