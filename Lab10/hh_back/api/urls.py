from django.urls import path
from . import views
from .views import VacancyList, VacancyDetail, TopTenVacancies, companies_list, company_detail, company_vacancy_list

urlpatterns = [
    path('', views.index, name='home'),
    path('companies/', companies_list, name='companies-list'),
    path('companies/<int:pk>/', company_detail, name='company-detail'),
    path('companies/<int:company_id>/vacancies/', company_vacancy_list, name='company-vacancies'),
    path('api/vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('api/vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('api/vacancies/top_ten/', TopTenVacancies.as_view(), name='top-ten-vacancies'),
]
