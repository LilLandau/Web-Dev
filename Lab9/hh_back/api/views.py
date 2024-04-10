from django.shortcuts import render
from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.exceptions import NotFound

# Create your views here.
def index(request):
    return render(request, 'api/index.html')

class CompaniesList(generics.ListCreateAPIView):
    queryset=Company.objects.all()
    serializer_class=CompanySerializer

class CompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class=CompanySerializer

class CompanyVacancyList(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        if not Company.objects.filter(id=company_id).exists():
            raise NotFound(detail="No Company matches the given query.")
        return Vacancy.objects.filter(company_id=company_id)

    
class VacancyList(generics.ListCreateAPIView):
    queryset=Vacancy.objects.all()
    serializer_class=VacancySerializer

class VacancyDetail(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class=VacancySerializer

class TopTenVacancies(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]