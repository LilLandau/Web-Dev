from django.urls import path
from . import views
from .views import CompaniesList, VacancyList, CompanyDetail, VacancyDetail,CompanyVacancyList,TopTenVacancies

urlpatterns = [
    path('', views.index, name='home'),
    path('api/companies/', CompaniesList.as_view(), name='company-list'),
    path('api/companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),
    path('api/companies/<int:company_id>/vacancies/', CompanyVacancyList.as_view(), name='company-vacancy-list'),
    path('api/vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('api/vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('api/vacancies/top_ten/', TopTenVacancies.as_view(), name='top-ten-vacancies'),
]
