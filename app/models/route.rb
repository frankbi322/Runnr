class Route < ApplicationRecord

  validates :name, :description, :author_id, :distance, :coordinates, presence: true


  belongs_to :author
  

end
