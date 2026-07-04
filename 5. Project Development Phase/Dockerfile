FROM python:3.11-slim

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 7860

ENV PORT=7860

CMD ["python", "app.py"]