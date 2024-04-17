from django.shortcuts import render, get_object_or_404
from rest_framework import generics, status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from rest_framework.decorators import api_view

def index(request):
    return render(request, 'api/index.html')

'''
class CompaniesList(generics.ListCreateAPIView):
    queryset=Company.objects.all()
    serializer_class=CompanySerializer
'''


'''class CompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class=CompanySerializer
'''

'''class CompanyVacancyList(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        if not Company.objects.filter(id=company_id).exists():
            raise NotFound(detail="No Company matches the given query.")
        return Vacancy.objects.filter(company_id=company_id)
'''

@api_view(['GET', 'POST'])
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def company_detail(request, pk):
    company = get_object_or_404(Company, pk=pk)
    serializer = CompanySerializer(company)
    return Response(serializer.data)

@api_view(['GET'])
def company_vacancy_list(request, company_id):
    if not Company.objects.filter(id=company_id).exists():
        return Response({'detail': 'No Company matches the given query.'}, status=status.HTTP_404_NOT_FOUND)

    vacancies = Vacancy.objects.filter(company_id=company_id)
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)
    
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