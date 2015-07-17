Spree::Variant.class_eval do

  include ActionView::Helpers::NumberHelper

  def to_hash
    {
      :id    => self.id,
      :in_stock => self.in_stock?,
      :price => self.display_price
    }
  end

end
