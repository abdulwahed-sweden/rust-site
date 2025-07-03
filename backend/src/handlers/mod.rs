// backend/src/handlers/mod.rs
use actix_web::{web, HttpResponse, Result};
use crate::models::{MultiplyResponse, ErrorResponse};

pub async fn multiply_numbers(path: web::Path<(i32, i32)>) -> Result<HttpResponse> {
    let (num1, num2) = path.into_inner();
    
    // Perform multiplication
    let result = num1 * num2;
    
    // Create response
    let response = MultiplyResponse {
        result,
        message: format!("Successfully multiplied {} and {}", num1, num2),
        operation: format!("{} × {} = {}", num1, num2, result),
    };
    
    println!("📊 Multiplication request: {} × {} = {}", num1, num2, result);
    
    Ok(HttpResponse::Ok().json(response))
}

pub async fn health_check() -> Result<HttpResponse> {
    let response = serde_json::json!({
        "status": "healthy",
        "message": "🦀 Rust backend is running perfectly!",
        "timestamp": chrono::Utc::now().to_rfc3339(),
        "version": "1.0.0"
    });
    
    println!("💚 Health check requested");
    Ok(HttpResponse::Ok().json(response))
}