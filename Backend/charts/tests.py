from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

class ChartAPITestCase(TestCase):
    
    def setUp(self):
        self.client = APIClient()

    def test_candlestick_data(self):
        url = reverse('candlestick-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('data', response.json())
        self.assertEqual(len(response.json()['data']), 5)

    def test_line_chart_data(self):
        url = reverse('line-chart-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.json())
        self.assertIn('data', response.json())
        self.assertEqual(len(response.json()['labels']), 5)
        self.assertEqual(len(response.json()['data']), 5)

    def test_bar_chart_data(self):
        url = reverse('bar-chart-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.json())
        self.assertIn('data', response.json())
        self.assertEqual(len(response.json()['labels']), 5)
        self.assertEqual(len(response.json()['data']), 5)

    def test_pie_chart_data(self):
        url = reverse('pie-chart-data')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('labels', response.json())
        self.assertIn('data', response.json())
        self.assertEqual(len(response.json()['labels']), 5)
        self.assertEqual(len(response.json()['data']), 5)
