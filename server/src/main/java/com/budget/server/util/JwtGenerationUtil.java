package com.budget.server.util;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtGenerationUtil {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    public String generateToken(String email) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(email)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public String extractEmail(String token) {
        return extractClaims(token).getSubject();
    }

    private Claims extractClaims(String token) {
        return (Claims) Jwts.parserBuilder().setSigningKey(secret).build().parseClaimsJws(token);
    }

    public boolean validateToken(String token) {
        try {
            Jws<Claims> claims = Jwts.parserBuilder()
                    .setSigningKey(secret)
                    .build()
                    .parseClaimsJws(token);
            if (claims.getBody().getExpiration().before(new Date())) {
                throw new ExpiredJwtException(null, null, "Token has expired");
            }
            System.out.println("JWT is valid");
            return true;
        } catch (ExpiredJwtException ex) {
            System.out.println("JWT Expired");
            return false;
        } catch (JwtException e) {
            System.out.println("Something went wrong verifying the JWT");
            return false;
        }
    }

}
