class Route < ApplicationRecord

  validates :name, :description, :author_id, :distance, :coordinates, :map_url, presence: true


  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments,
    primary_key: :id,
    foreign_key: :route_id,
    class_name: :Comment

    has_many :completions

end
