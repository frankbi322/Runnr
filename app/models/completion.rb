class Completion < ApplicationRecord

validates :user_id, :route_id, presence: true

belongs_to :user


belongs_to :route




end
