class RoomSerializer < ApplicationSerializer
  attributes :id, :name, :users, :posts

  has_many :userrooms
  has_many :users, through: :userrooms
  has_many :posts

end