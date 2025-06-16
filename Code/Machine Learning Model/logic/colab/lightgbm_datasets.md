# You can tune these parameters further
lgb_clf = lgb.LGBMClassifier(objective='binary',
                             metric='binary_logloss',
                             n_estimators=1000, # Number of boosting rounds
                             learning_rate=0.05,
                             num_leaves=31,
                             max_depth=12,
                             random_state=42,
                             min_child_samples=100,
                             n_jobs=-1, # Use all available cores
                             colsample_bytree=0.8,
                             subsample=0.8,
                             reg_alpha=0.1,
                             reg_lambda=0.1)

embeddings_and_labels_cls_last_layer

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9754
LightGBM F1 Score: 0.9681
LightGBM Precision: 0.9733
LightGBM Recall: 0.9630

embeddings_and_labels_concat_last_4_layers_avg

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9757
LightGBM F1 Score: 0.9685
LightGBM Precision: 0.9739
LightGBM Recall: 0.9632

embeddings_and_labels_concat_last_4_layers_cls

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9757
LightGBM F1 Score: 0.9685
LightGBM Precision: 0.9752
LightGBM Recall: 0.9618

embeddings_and_labels_last_4_layers_avg

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9758
LightGBM F1 Score: 0.9686
LightGBM Precision: 0.9752
LightGBM Recall: 0.9621


last 4 layers max with early stopping:

Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9760
LightGBM F1 Score: 0.9689
LightGBM Precision: 0.9747
LightGBM Recall: 0.9632


last 4 layers avg with early stopping:


Evaluating LightGBM model on test embeddings...
LightGBM Accuracy: 0.9763
LightGBM F1 Score: 0.9694
LightGBM Precision: 0.9753
LightGBM Recall: 0.9635


Best trial:
  Value (Mean F1-score across folds): 0.9956
  Params: 
    learning_rate: 0.08653943910805914
    num_leaves: 63
    max_depth: 20
    min_child_samples: 80
    subsample: 0.9818496824692567
    colsample_bytree: 0.9684482051282947
    reg_alpha: 0.29894998940554257
    reg_lambda: 0.4609371175115584



XLMRobertaConfig {
  "_num_labels": 9,
  "architectures": [
    "XLMRobertaForSequenceClassification"
  ],
  "attention_probs_dropout_prob": 0.1,
  "bos_token_id": 0,
  "classifier_dropout": null,
  "eos_token_id": 2,
  "hidden_act": "gelu",
  "hidden_dropout_prob": 0.1,
  "hidden_size": 1024,
  "id2label": {
    "0": "REAL",
    "1": "FAKE"
  },
  "initializer_range": 0.02,
  "intermediate_size": 4096,
  "label2id": {
    "FAKE": 1,
    "REAL": 0
  },
  "layer_norm_eps": 1e-05,
  "max_position_embeddings": 514,
  "model_type": "xlm-roberta",
  "num_attention_heads": 16,
  "num_hidden_layers": 24,
  "output_past": true,
  "pad_token_id": 1,
  "position_embedding_type": "absolute",
  "problem_type": "single_label_classification",
  "torch_dtype": "float32",
  "transformers_version": "4.52.4",
  "type_vocab_size": 1,
  "use_cache": true,
  "vocab_size": 250002
}

second finetuned model (Trashed)

Initializing LightGBM model with best parameters...
Training LightGBM model on the entire training dataset...
Training until validation scores don't improve for 100 rounds
Early stopping, best iteration is:
[83]	valid_0's binary_logloss: 0.0153911
Model trained. Best iteration found: 83

Evaluating model on the test dataset...
Test F1-score (macro): 0.9753
Test ROC AUC: 0.9960
Test Accuracy: 0.9766

Classification Report on Test Set:
              precision    recall  f1-score   support

           0       0.98      0.99      0.98      5611
           1       0.98      0.96      0.97      3563

    accuracy                           0.98      9174
   macro avg       0.98      0.97      0.98      9174
weighted avg       0.98      0.98      0.98      9174


Initializing LightGBM model with best parameters...
Training LightGBM model on the entire training dataset...
Training until validation scores don't improve for 100 rounds
Early stopping, best iteration is:
[180]	valid_0's binary_logloss: 0.00236421
Model trained. Best iteration found: 180

Evaluating model on the test dataset...
Test F1-score (macro): 0.9784
Test ROC AUC: 0.9935
Test Accuracy: 0.9796

Classification Report on Test Set:
              precision    recall  f1-score   support

           0       0.98      0.99      0.98      5611
           1       0.99      0.96      0.97      3563

    accuracy                           0.98      9174
   macro avg       0.98      0.98      0.98      9174
weighted avg       0.98      0.98      0.98      9174
