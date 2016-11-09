class Follow < ApplicationRecord

  validates :follower_id, :followee_id, presence: true
  validates :cannot_friend_self

  belongs_to :follower,
  class_name: :User,
  foreign_key: :follower_id,
  primary_key: :id

  belongs_to :followee,
  class_name: :User,
  primary_key: :id,
  foreign_key: :followee_id

  def cannot_friend_self
    if self.follower_id == self.followee_id
      errors[:follower_id] << "can't friend yourself!"
    end
  end

end
