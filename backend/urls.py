
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),

    path('api/product/', include('farmProduct.urls')),
    path('api/users/', include('account.urls')),
    path('api/order/', include('orders.urls')),
    path('api/support/', include('support.urls')),
    path('api/story/', include('story.urls')),

]

# Static file configuration for local
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
