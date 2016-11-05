class Route < ApplicationRecord

  validates :name, :description, :author_id, :distance, :coordinates, presence: true


  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User


end
