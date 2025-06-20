## xml-roberta-large

Test set evaluation results:
{'eval_loss': 0.10700761526823044, 'eval_accuracy': 0.9795073032483105, 'eval_f1': 0.9794814296381473, 'eval_precision': 0.9795121573375819, 'eval_recall': 0.9795073032483105, 'eval_runtime': 13.9603, 'eval_samples_per_second': 328.575, 'eval_steps_per_second': 10.315, 'epoch': 5.0}

Epoch	Training Loss	Validation Loss	Accuracy	F1	Precision	Recall
1	0.162100	0.095092	0.966863	0.966766	0.966953	0.966863
2	0.097600	0.090733	0.976237	0.976243	0.976252	0.976237
3	0.058300	0.105016	0.976673	0.976638	0.976684	0.976673
4	0.024700	0.112701	0.977981	0.977966	0.977968	0.977981
5	0.009900	0.147507	0.977981	0.977966	0.977968	0.977981

embeddings-and-labels_last-4-layers-avg_xml-roberta-large.pkl

Early stopping, best iteration is:
[77]	valid_0's binary_logloss: 0.0063185
Model trained. Best iteration found: 77

Evaluating model on the test dataset...
Test F1-score (macro): 0.9773
Test ROC AUC: 0.9954
Test Accuracy: 0.9784

Classification Report on Test Set:
              precision    recall  f1-score   support

           0       0.98      0.98      0.98      5611
           1       0.98      0.97      0.97      3563

    accuracy                           0.98      9174
   macro avg       0.98      0.98      0.98      9174
weighted avg       0.98      0.98      0.98      9174

## xml-roberta-base

Epoch	Training Loss	Validation Loss	Accuracy	F1	Precision	Recall
1	0.171400	0.189150	0.930238	0.930802	0.934953	0.930238
2	0.105000	0.122421	0.962721	0.962502	0.963324	0.962721
3	0.068900	0.121791	0.969479	0.969343	0.969837	0.969479
4	0.034100	0.135806	0.971441	0.971378	0.971480	0.971441
5	0.022800	0.142891	0.972967	0.972933	0.972955	0.972967

Test set evaluation results:
{'eval_loss': 0.15270528197288513, 'eval_accuracy': 0.9716590364072378, 'eval_f1': 0.9716232537548846, 'eval_precision': 0.9716435670887076, 'eval_recall': 0.9716590364072378, 'eval_runtime': 5.7668, 'eval_samples_per_second': 795.413, 'eval_steps_per_second': 24.97, 'epoch': 5.0}

embeddings-and-labels_last-4-layers-avg_xml-roberta-base.pkl

Early stopping, best iteration is:
[148]	valid_0's binary_logloss: 0.0105511
Model trained. Best iteration found: 148

Evaluating model on the test dataset...
Test F1-score (macro): 0.9738
Test ROC AUC: 0.9961
Test Accuracy: 0.9753

Classification Report on Test Set:
              precision    recall  f1-score   support

           0       0.97      0.99      0.98      5611
           1       0.98      0.96      0.97      3563

    accuracy                           0.98      9174
   macro avg       0.98      0.97      0.97      9174
weighted avg       0.98      0.98      0.98      9174

## roberta-large

Epoch	Training Loss	Validation Loss	Accuracy	F1	Precision	Recall
1	0.120000	0.109809	0.960977	0.960630	0.962482	0.960977
2	0.099900	0.105618	0.966863	0.966671	0.967503	0.966863
3	0.053000	0.132690	0.971877	0.971777	0.972092	0.971877
4	0.021500	0.102388	0.976673	0.976667	0.976664	0.976673
5	0.012000	0.130341	0.979507	0.979507	0.979507	0.979507

Test set evaluation results:
{'eval_loss': 0.13948746025562286, 'eval_accuracy': 0.9764551994767822, 'eval_f1': 0.9764429963375397, 'eval_precision': 0.9764405574893301, 'eval_recall': 0.9764551994767822, 'eval_runtime': 14.0411, 'eval_samples_per_second': 326.684, 'eval_steps_per_second': 10.256, 'epoch': 5.0}

embeddings-and-labels_last-4-layers-avg_roberta-large.pkl

Early stopping, best iteration is:
[148]	valid_0's binary_logloss: 0.0105511
Model trained. Best iteration found: 148

Evaluating model on the test dataset...
Test F1-score (macro): 0.9738
Test ROC AUC: 0.9961
Test Accuracy: 0.9753

Classification Report on Test Set:
              precision    recall  f1-score   support

           0       0.97      0.99      0.98      5611
           1       0.98      0.96      0.97      3563

    accuracy                           0.98      9174
   macro avg       0.98      0.97      0.97      9174
weighted avg       0.98      0.98      0.98      9174

## roberta-base

Epoch	Training Loss	Validation Loss	Accuracy	F1	Precision	Recall
1	0.126200	0.106705	0.961849	0.961799	0.961809	0.961849
2	0.090900	0.108195	0.965555	0.965311	0.966539	0.965555
3	0.068800	0.089926	0.972749	0.972668	0.972883	0.972749
4	0.043500	0.097067	0.976891	0.976894	0.976896	0.976891
5	0.040500	0.116278	0.977109	0.977101	0.977097	0.977109

Test set evaluation results:
{'eval_loss': 0.1272689253091812, 'eval_accuracy': 0.9751471550032701, 'eval_f1': 0.9751184521302948, 'eval_precision': 0.9751370544727358, 'eval_recall': 0.9751471550032701, 'eval_runtime': 5.8646, 'eval_samples_per_second': 782.145, 'eval_steps_per_second': 24.554, 'epoch': 5.0}

Early stopping, best iteration is:
[88]	valid_0's binary_logloss: 0.0248509
Model trained. Best iteration found: 88

Evaluating model on the test dataset...
Test F1-score (macro): 0.9713
Test ROC AUC: 0.9963
Test Accuracy: 0.9729

Classification Report on Test Set:
              precision    recall  f1-score   support

           0       0.97      0.98      0.98      5611
           1       0.97      0.96      0.96      3563

    accuracy                           0.97      9174
   macro avg       0.97      0.97      0.97      9174
weighted avg       0.97      0.97      0.97      9174

## bert-base-uncased

Epoch	Training Loss	Validation Loss	Accuracy	F1	Precision	Recall
1	0.216400	0.214450	0.914977	0.914122	0.915855	0.914977
2	0.144600	0.153312	0.940702	0.940004	0.942830	0.940702
3	0.113000	0.159462	0.944844	0.944278	0.946499	0.944844
4	0.065000	0.178294	0.949204	0.949196	0.949189	0.949204
5	0.052200	0.200083	0.950730	0.950523	0.950870	0.950730

Test set evaluation results:
{'eval_loss': 0.1951652467250824, 'eval_accuracy': 0.9533464137780685, 'eval_f1': 0.9531326914975214, 'eval_precision': 0.9535680865245567, 'eval_recall': 0.9533464137780685, 'eval_runtime': 6.3287, 'eval_samples_per_second': 724.792, 'eval_steps_per_second': 22.753, 'epoch': 5.0}

embeddings-and-labels_last-4-layers-avg_bert-base-uncased.pkl

Early stopping, best iteration is:
[88]	valid_0's binary_logloss: 0.0569456
Model trained. Best iteration found: 88

Evaluating model on the test dataset...
Test F1-score (macro): 0.9439
Test ROC AUC: 0.9841
Test Accuracy: 0.9472

Classification Report on Test Set:
              precision    recall  f1-score   support

           0       0.94      0.97      0.96      5611
           1       0.96      0.91      0.93      3563

    accuracy                           0.95      9174
   macro avg       0.95      0.94      0.94      9174
weighted avg       0.95      0.95      0.95      9174