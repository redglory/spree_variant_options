Spree::Variant.class_eval do

  include ActionView::Helpers::NumberHelper

  def to_hash
    {
      :id    => self.id,
      :in_stock => self.in_stock?,
      :on_sale => self.on_sale?,
      :sale_price => sale_price,
      :price => self.original_price_in(Spree::Config[:currency] || "EUR").display_price
    }
  end

  private
    def sale_price
      on_sale? ? self.display_price : nil
    end
end
