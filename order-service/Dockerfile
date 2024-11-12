# Use the official Maven image to build the application
FROM maven:3.8.6-openjdk-11 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Use a lightweight JRE image to run the application
FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=build /app/target/order-service-1.0.0.jar order-service.jar

# Health check to ensure the application is running
HEALTHCHECK --interval=30s --timeout=10s CMD curl -f http://localhost:8081/ || exit 1

# Command to run the application
ENTRYPOINT ["java", "-jar", "order-service.jar"]