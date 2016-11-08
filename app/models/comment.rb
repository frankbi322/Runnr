class Comment < ApplicationRecord

  validates :route_id, :author_id, :body, presence: true

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :route,
    primary_key: :id,
    foreign_key: :route_id,
    class_name: :Route

  def author_name
    self.author.username
  end


end
