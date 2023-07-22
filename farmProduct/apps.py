from django.apps import AppConfig


class FarmproductConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'farmProduct'

    def ready(self):
        import farmProduct.signals
