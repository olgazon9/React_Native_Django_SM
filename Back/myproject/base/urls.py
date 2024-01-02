from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import register, login, TodoViewSet

# Create a router and register the TodoViewSet
router = DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    # Include the Todo URLs from the router
    path('', include(router.urls)),
]
