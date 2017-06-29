class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable,
          :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :bio, dependent: :destroy

  before_create :create_bio

  private

    def create_bio
      self.bio = Bio.new(user_id: self.id)
    end
end
