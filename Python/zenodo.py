import pandas as pd
import os

json_path = "/Users/krisschaaf/Documents/Uni/Bachelorarbeit/ml_zum_erkennen_von_fake_news/Datasets/GermanFakeNC/GermanFakeNC.json"

# Dataset laden
df = pd.read_json(json_path)

# Ersten Einblick
print("\nBeispielhafte Zeilen:")
print(df.head())

# Statistiken berechnen
gesamt = len(df)
anzahl_fake = df["Fake"].sum()  # weil Fake == 1
anzahl_keinfake = gesamt - anzahl_fake
prozent_fake = (anzahl_fake / gesamt) * 100

# Ergebnisse ausgeben
print("\nStatistiken zum Datensatz:")
print(f"Gesamtanzahl der Zeilen: {gesamt}")
print(f"Anzahl der 'Fake'-Zeilen: {anzahl_fake}")
print(f"Anzahl der 'Kein Fake'-Zeilen: {anzahl_keinfake}")
print(f"Anteil 'Fake' in Prozent: {prozent_fake:.2f}%")
