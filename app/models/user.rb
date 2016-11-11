class User < ApplicationRecord

  attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  has_many :created_routes,
    class_name: :Route,
    foreign_key: :author_id,
    primary_key: :id

  has_many :followees,
    through: :follows,
    source: :user

  has_many :friends,
    through: :follows,
    source: :followee

  has_many :follows,
    class_name: :Follow,
    primary_key: :id,
    foreign_key: :follower_id

  has_many :completions

  has_many :completed_runs,
      through: :completions,
      source: :route

    def total_distance
      sum = 0
      self.completed_runs.each do |run|
        sum+=run.distance
      end
      return sum
    end

  def total_completions
    completions.count
  end

  has_many :comments

	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end



	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end
end
